import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import SBreadCrum from '../../components/BreadCrum';
import SButton from '../../components/button';
import Table from '../../components/TableWithAction';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../../redux/categories/action';
import Swal from 'sweetalert2'; 
import { deleteData } from '../../utils/fetchData';
import { setNotif } from '../../redux/notif/action';
import { accessCategories } from '../../const/access';
import SAlert from '../../components/alert';

function Categories() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const notif = useSelector((state) => state.notif);
  const categories = useSelector((state) => state.categories);
  const [access, setAccess] = useState({
    tambah: false,
    hapus: false,
    edit: false,
  });

  const checkAccess = () => {
    let { role } = localStorage.getItem('auth')
      ? JSON.parse(localStorage.getItem('auth'))
      : {};
    const access = { tambah: false, hapus: false, edit: false };
    Object.keys(accessCategories).forEach(function (key, index) {
      if (accessCategories[key].indexOf(role) >= 0) {
        access[key] = true;
      }
    });
    setAccess(access);
  };

  useEffect(() => {
    checkAccess();
  }, []);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Apa kamu yakin?',
      text: 'Anda tidak akan dapat mengembalikan ini!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Iya, Hapus',
      cancelButtonText: 'Batal',
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteData(`/cms/categories/${id}`);
        dispatch(
          setNotif(
            true,
            'success',
            `berhasil hapus kategori ${res.data.data.name }`
          )
        );
        console.log(res)
        dispatch(fetchCategories());
      }
    });
  };

  return (
    <Container className='mt-3'>
      <SBreadCrum textSecond={'Categories'} />

      {access.tambah && (
        <SButton
          className={'mb-3'}
          action={() => navigate('/categories/create')}
        >
          Tambah
        </SButton>
      )}

      {notif.status && (
        <SAlert type={notif.typeNotif} message={notif.message} />
      )}

      <Table
        status={categories.status}
        thead={['Nama', 'Aksi']}
        data={categories.data}
        tbody={['name']}
        editUrl={access.edit ? `/categories/edit` : null}
        deleteAction={access.hapus ? (id) => handleDelete(id) : null}
        withoutPagination
      />
    </Container>
  );
}

export default Categories;
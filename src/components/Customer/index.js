import React, { useState, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllData } from '../../store/actions/data';
import Pagination from '../Pagination';
import { types, colorStatus, payStatus } from '../../constants/common'
import './style.scss';
import { ReactComponent as ContactIcon } from '../../assets/icons/EmailPhone.svg';
import { ReactComponent as ShippingIcon } from '../../assets/icons/Shipping.svg';
import { ReactComponent as InvoiceIcon } from '../../assets/icons/Invoice.svg';
import { ReactComponent as CornerdownIcon } from '../../assets/icons/corner-down-right.svg';
import { FaInfoCircle } from 'react-icons/fa';

let PageSize = 5;

const Customer = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const data = useSelector(state => state.data?.data?.orders || []);
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return (data && data.slice(firstPageIndex, lastPageIndex)) || [];
  }, [currentPage, data]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllData())
  }, [dispatch])

  return (
    <div className='container'>
      <div className='nav-bar'>Anna Anne (19901230-4567)</div>
      <div className='contents'>
        <div className='header'>
          <div className='contact-info'>
            <div className='contact-title'><ContactIcon />&nbsp; Contact Anna</div>
            <div className='contact-detail'>annaanne@qliro.com</div>
            <div className='contact-detail'>+46721234567</div>
          </div>
          <div className='contact-info'>
            <div className='contact-title'><ShippingIcon />&nbsp; Shipping address</div>
            <div className='contact-detail'>annaanne@qliro.com</div>
            <div className='contact-detail'>+46721234567</div>
          </div>
          <div className='contact-info'>
            <div className='contact-title'><InvoiceIcon />&nbsp; Invoice Address</div>
            <div className='contact-detail'>annaanne@qliro.com</div>
            <div className='contact-detail'>+46721234567</div>
          </div>
        </div>
        <div className='content-title-bar'>
          <div className='content-title'>Anna’s orders</div>
          <div className='content-description'><FaInfoCircle style={{ color: '#ECECEC', fontSize: '16px' }} />&nbsp; Help</div>
        </div>
        <div className='details' >
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Order number</th>
                <th>Created</th>
                <th>Store</th>
                <th>Payment method</th>
                <th>Payment status</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {currentTableData.map(item => {
                return (
                  <tr key={`key - ${item.id}`}>
                    <td><div className='item-card' style={{ backgroundColor: types[`${item.type}`], color: item.type === 'Online' ? '#222222' : '#FFFFFF' }}>{item.type}</div></td>
                    <td><div className='item-order'>{item.id}&nbsp;<CornerdownIcon /></div></td>
                    <td>{item.createdAt}</td>
                    <td><div className='item-store'><img src={require(`../../assets/icons/${item.country}`)} alt=""/>&nbsp; {item.store}</div></td>
                    <td><div className='item-store'><img className='item-payment' src={require(`../../assets/icons/${item.payment_img}`)} alt=""/>&nbsp; {item.payment}</div></td>
                    <td><div className='item-circle' style={{ backgroundColor: colorStatus[item.pay_status] }}></div>&nbsp; {payStatus[item.pay_status]}</td>
                    <td><div className='item-amount'>{item.amount}</div></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={data.length}
            pageSize={PageSize}
            onPageChange={page => setCurrentPage(page)}
          />
        </div>
      </div>
    </div>
  );
}

export default Customer;
import React, {useState} from 'react'
import { Pagination } from 'react-bootstrap';

const Table = (props) => {

  const { rows, openEdit, OpenDelete } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(rows.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = rows.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const linkStyle = {
    cursor: "pointer"
  }

  const tableStyle = {
    borderRadius: '5px',
    overflow: 'hidden',
  }

  const messageStyle = {
    textAlign: 'center'
  }

  return (
    <div>
      <table className="table table-hover" style={tableStyle}>
        <thead>
          <tr className="table-primary">
            <th scope="col"> Title </th>
            <th scope="col"> Discerption </th>
            <th scope="col"> Status </th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {
            rows.length > 0 ? 
                currentItems.map((row, index) => (
                  <tr key={"row" + index} className="table-light">
                    <td scope="row"> {row.title} </td>
                    <td scope="row"> {row.description} </td>
                    <th scope="row" className={`text-${row.completed ? 'success' : 'danger'}`}> {row.completed ? "Completed" : "Pending"} </th>
                    <th scope="row">
                        <p style={linkStyle} className="d-inline text-success mx-3" onClick={() => openEdit(row)}>
                            Edit
                        </p>
                        <p style={linkStyle} className="d-inline text-danger" onClick={() => OpenDelete(row)}>
                            Delete
                        </p>
                    </th>
                  </tr>
                ))
                :
                  <tr>
                    <th scope="row" colSpan={4} style={messageStyle}>
                      No Records! 
                    </th>       
                  </tr>
          }
        </tbody>
      </table>
      {
          rows.length > 0 && totalPages > 1 &&
          <div className="d-flex justify-content-end">
            <Pagination>
              {
                currentPage !== 1 &&
                <Pagination.Prev
                 onClick={() => handlePageChange(currentPage - 1)}
                 disabled={currentPage === 1}
                />
              }
              {Array.from({ length: totalPages }).map((_, index) => (
                <Pagination.Item
                 key={index + 1}
                 active={index + 1 === currentPage}
                 onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </Pagination.Item>
              ))}
              {
                currentPage !== totalPages &&
                <Pagination.Next
                 onClick={() => handlePageChange(currentPage + 1)}
                 disabled={currentPage === totalPages}
                />
              }
            </Pagination>
          </div>
      }
    </div>
  )
}

export default Table

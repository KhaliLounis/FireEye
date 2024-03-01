import React from 'react';
import Template from '../comps/Template';
import Filter from '../comps/Filter';

const Devices = () => {
  return (
    <Template>
      <h1 className="font-main text-5xl text-black pt-4 text-center">
        Welcome back, {`Walid Younes`}
      </h1>
      <p className='fs-1 my-3 fw-bold pl-8'>Devices</p>
      <Filter></Filter>
      <div className='p-0 bg-white rounded-4 table-container'>
        <table className="table table-hover custom-table">
          <thead>
            <tr>
              <th scope="col">ref</th>
              <th scope="col">Name</th>
              <th scope="col">Status</th>
              <th scope="col">Fire Detection</th>
              <th scope="col">Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td className='text-success fw-bold'>Otto</td>
              <td className='text-success fw-bold'>@mdo</td>
              <td ><a href='#'>view map</a></td>
            </tr>

          </tbody>
        </table>
      </div>

    </Template>
  )
}

export default Devices
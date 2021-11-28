//UC4:using template literals ES6 features

window.addEventListener('DOMContentLoaded',(event)=>{
    createInnerHtml();
});

const createInnerHtml= () => {
 const headerHtml="<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                  "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    const innerHTML=` ${headerHtml}   
        <tr>
            <td><img class="profile" src="C:\Users\Admin\Desktop\EmpPayrollApp\assests\profile-images\Ellipse -2.png" alt=""></td>
            <td>Srujan Mahajan</td>
            <td>Male</td>
            <td><div class='dept-label'>HR</div> <div class='dept-label'>Finance</div>
            <td>3000000</td>
            <td>1-Nov-2020</td>
            <td>
                <img name="1" onclick="remove(this)" src="C:\Users\Admin\Desktop\EmpPayrollApp\assests\icons\delete-black-18dp.svg" alt="delete">
                <img name="1" onclick="update(this)" src="C:\Users\Admin\Desktop\EmpPayrollApp\assests\icons\create-black-18dp.svg" alt="edit">
            </td>
        </tr>
    `;
    document.querySelector('#table-display').innerHTML=innerHtml;
}
//UC6:
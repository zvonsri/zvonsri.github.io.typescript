export const SQLServer = () => (<><h3>SQL Server Page</h3>
  <SideBar />
  <SQLStoredProcedures />
  <SQLFunctions />
</>)

export const SideBar = () => {
  
  const handleButtonClick = () => {
    console.log("Handle Button Click");
  }
  return ( <nav>
    <ul>
      <li><button onClick={handleButtonClick}>Tables</button></li>
      <li><button onClick={handleButtonClick}>Views</button></li>
      <li><button onClick={handleButtonClick}>Stored Procedures</button></li>
      <li><button onClick={handleButtonClick}>Functions</button></li>
      {/* <li><button onClick={handleButtonClick}></button></li>
      <li><button onClick={handleButtonClick}></button></li>
      <li><button onClick={handleButtonClick}></button></li>
      <li><button onClick={handleButtonClick}></button></li> */}
    </ul>
  </nav>
)
}

export const SQLStoredProcedures = () => {
  return (
    <>
    <hr />
    <h3>SQL Stored Procedures</h3>

    </>
  )
}

export const SQLFunctions = () => {
  return (
    <>
    <hr />
    <h3>DDL</h3>
    <p>CREATE</p>
    <p>ALTER</p>
    <p>DROP</p>
    <h3>DML</h3>
    <p>INSERT</p>
    <p>UPDATE</p>
    <p>DELETE</p>
    <h3>DDL</h3>
    <h3>SQL Procedures</h3>
    <h3>SQL Functions</h3>
    <p>GETDATE()</p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    </>
  )
}
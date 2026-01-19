function submit(e){
    //e.preventDefault();
    const Name =document.getElementById("Name").value.trim();
    const email= document.getElementById("email").value.trim();
    const Username= document.getElementById("Username").value.trim();
    const password= document.getElementById("[password").value.trim();


    const data =[
        ["Name","email","Username","password"],
        [Name,email,Username,password]
    ]
    const worksheet = XLSX.utils.aoa_to_sheet(data);
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Registrations");
    XLSX.writeFile(workbook, "registrations.xlsx");
}
//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Project01.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;

    public partial class employee
    {
        public int employeeid { get; set; }
        public int DepartmentID { get; set; }
        [DisplayName("Nombre")]
        public string emp_Name { get; set; }
        [DisplayName("Direcci�n")]
        public string emp_Address { get; set; }
        [DisplayName("Tel�fono")]
        public string emp_Phone { get; set; }
    
        public virtual department department { get; set; }
    }
}
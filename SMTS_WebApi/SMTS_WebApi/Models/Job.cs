//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace SMTS_WebApi.Models
{
    using Newtonsoft.Json;
    using System;
    using System.Collections.Generic;
    using System.Runtime.Serialization;
    
    public partial class Job
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string CompanyName { get; set; }
        public string RequiredYearExperience { get; set; }
        public string Description { get; set; }
        public System.DateTime LastDate { get; set; }
        public string KeySkills { get; set; }
        public string Salary { get; set; }
        public string Industry { get; set; }
        public string FunctionalArea { get; set; }
        public string Role { get; set; }
        public string CompanyProfile { get; set; }
        public System.DateTime PostedDate { get; set; }
        public string CompanyImage { get; set; }

        [JsonIgnore]
        [IgnoreDataMember]
        public int LocationId { get; set; }
        [JsonIgnore]
        [IgnoreDataMember]
        public int ProcessId { get; set; }
        [JsonIgnore]
        [IgnoreDataMember]
        public int QualificationId { get; set; }
        [JsonIgnore]
        [IgnoreDataMember]
        public int UserId { get; set; }
    
        public virtual Location Location { get; set; }
        public virtual Process Process { get; set; }
        public virtual Qualification Qualification { get; set; }
        public virtual User User { get; set; }
    }
}

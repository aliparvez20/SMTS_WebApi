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
    using System.ComponentModel.DataAnnotations;
    using System.Runtime.Serialization;

    [DataContract(IsReference = true)] 
    //[JsonObject(IsReference = true)] 
    public partial class Location
    {
        public Location()
        {
            this.Jobs = new HashSet<Job>();
        }

        [Key] 
        public int Id { get; set; }
        [DataMember]
        public string LocationName { get; set; }


        //[JsonIgnore]
        //[IgnoreDataMember] 
         
        public virtual ICollection<Job> Jobs { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SMTS_WebApi.Models
{
    public class Job
    {
        public int JobId { get; set; }
        public string JobTitle { get; set; }
        public string JobCompanyName { get; set; }
        public string JobRequiredYearExperience { get; set; }
        public string JobLocation { get; set; }
        public string JobDescription { get; set; }
        public DateTime? JobLastDate { get; set; }
        public string JobProcess { get; set; }
        public string JobKeySkills { get; set; }
        public string JobSalary { get; set; }
        public string JobIndustry { get; set; }
        public string JobFunctionalArea { get; set; }
        public string JobRole { get; set; }
        public string JobQualification { get; set; }
        public string JobCompanyProfile { get; set; }
        public DateTime? JobPostedDate { get; set; }
        public string JobCompanyImage { get; set; }
        public int? UserId { get; set; }
    }
}
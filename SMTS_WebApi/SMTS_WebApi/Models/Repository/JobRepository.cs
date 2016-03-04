using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SMTS_WebApi.Models.Repository
{
    public class JobRepository
    {
        public List<Job> GetJobs() 
        {
            SandhanDBContext db = new SandhanDBContext();
            return db.jobs.ToList();
        }
    }
}
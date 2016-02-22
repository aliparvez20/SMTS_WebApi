using SMTS_WebApi.Models;
using SMTS_WebApi.Models.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SMTS_WebApi.Controllers
{
    public class JobsController1111 : ApiController
    {
        static readonly IJobRepository repository = new JobRepository();

        // GET: api/Jobs
        public IEnumerable<Job> Get()
        {
            return repository.GetAllJob();
        }

        // GET: api/Jobs?JobId=1
        public Job Get(int JobId)
        {
            Job job = repository.GetJobById(JobId);
            if (job == null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
            return job;
        }

        // POST FOR INSERT: api/Jobs
        //public void Post([FromBody]string value)
        public void Post(Job job)
        {

            repository.InsertJob(job);
        }

        // PUT FOR UPDATE: api/Jobs/5
        public void Put(int JobId, Job job)
        {
            repository.UpdateJob(job);
        }

        // DELETE: api/Jobs/5
        public int Delete(int JobId)
        {
            return repository.DeleteJob(JobId);
        }
    }
}

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
    public class JobController : ApiController
    {
        static readonly IJobRepository repository = new JobRepository();
        // GET: api/Job
        public IEnumerable<Job> Get()
        {
            return repository.GetAllJob();
        }

        // GET: api/Job/5
        public Job Get(int JobId)
        {
            Job job = repository.GetJobById(JobId);
            if (job == null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
            return job;
        }

        // POST: api/Job
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Job/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Job/5
        public void Delete(int id)
        {
        }
    }
}

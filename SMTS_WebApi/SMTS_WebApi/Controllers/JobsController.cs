using SMTS_WebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SMTS_WebApi.Controllers
{
    public class JobsController : ApiController
    {
        //IJobRepository repository = new JobRepository();
        static readonly IJobRepository repository = new JobRepository();
        // GET: api/Jobs
        public IEnumerable<Job> Get()
        {
            return repository.GetAllJob();
        }

        // GET: api/Jobs?JobId=1
        public Job Get(string JobId)
        {
            Job job = repository.GetJobById(Convert.ToInt32(JobId));
            if (job == null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
            return job;
        }

        // POST: api/Jobs
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Jobs/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Jobs/5
        public void Delete(int id)
        {
        }
    }
}

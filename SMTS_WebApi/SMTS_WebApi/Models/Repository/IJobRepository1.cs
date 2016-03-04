using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SMTS_WebApi.Models.Repository
{
    public interface IJobRepository
    {
        List<Job> GetAllJob();
        Job GetJobById(int JobId);
        void InsertJob(Job job);
        void UpdateJob(Job job);
        int DeleteJob(int JobId);
    }
}

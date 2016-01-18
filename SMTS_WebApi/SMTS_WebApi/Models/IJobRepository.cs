using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SMTS_WebApi.Models
{
    public interface IJobRepository
    {
        List<Job> GetAllJob();
        Job GetJobById(int JobId);

    }
}

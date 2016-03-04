using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace SMTS_WebApi.Models
{
    public class SandhanDBContext: DbContext
    {
        public DbSet<Job> jobs { get; set;}
        public DbSet<Location> locations { get; set; }
        public DbSet<Process> processes { get; set; }
        public DbSet<Qualification> qualifications { get; set; }
        public DbSet<Message> messages { get; set; }
    }
}
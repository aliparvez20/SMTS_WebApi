using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SMTS_WebApi.Models
{
    public class InternalEmployee
    {
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string UserEmail { get; set; }
        public string Password { get; set; }
        public string Mobile { get; set; }
        public bool IsAdmin { get; set; }

    }
}
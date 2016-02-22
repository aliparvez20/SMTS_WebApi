using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SMTS_WebApi.Models
{
    public class Message
    {
        public int messageId { get; set; }
        public string messageName { get; set; }
        public string messageEmail { get; set; }
        public string messageBody { get; set; }
        public DateTime? messageDate { get; set; }
    }
}
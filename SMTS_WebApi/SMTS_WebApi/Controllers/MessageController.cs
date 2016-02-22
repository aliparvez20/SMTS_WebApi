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
    public class MessageController : ApiController
    {
        static readonly IMessageRepository repository = new MessageRespository();
        // GET: api/Message
        public IEnumerable<Message> Get()
        {
            return repository.GetAllMessage();
        }

        // GET: api/Message/5
        public Message Get(int id)
        {
            return repository.GetMessageById(id);
        }

        // POST: api/Message
        public void Post([FromBody]string value)
        {
            //Message message = new Message();
            //message.messageName = 
            //return repository.InsertMessage();
        }

        //// PUT: api/Message/5
        //public void Put(int id, [FromBody]string value)
        //{
        //}

        // DELETE: api/Message/5
        public void Delete(int id)
        {
            repository.DeleteMessage(id);
        }
    }
}

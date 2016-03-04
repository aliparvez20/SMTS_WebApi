using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SMTS_WebApi.Models.Repository
{
    public interface IMessageRepository
    {
        List<Message> GetAllMessage();
        Message GetMessageById(int MessageId);
        void InsertMessage(Message message);
        void DeleteMessage(int MessageId);
    }
}

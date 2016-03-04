using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace SMTS_WebApi.Models.Repository
{
    public class MessageRespository : IMessageRepository
    {
        static string ConnectionString = ConfigurationManager.ConnectionStrings["DBConnectionString"].ConnectionString;

        [HttpGet]
        public List<Message> GetAllMessage()
        {
            List<Message> messages = new List<Message>();
            using (SqlConnection connection = new SqlConnection(ConnectionString))
            {
                using (SqlCommand cmd = new SqlCommand("sp_GetAllMessage", connection))
                {
                    connection.Open();
                    cmd.CommandType = CommandType.StoredProcedure;
                    SqlDataReader reader = cmd.ExecuteReader();
                    while (reader.Read())
                    {
                        Message message = new Message();
                        message.messageId = (int)reader["messageId"];


                        if (reader["messageName"] != null && reader["messageName"] != DBNull.Value)
                            message.messageName = (string)reader["messageName"];
                        else
                            message.messageName = "";

                        if (reader["messageEmail"] != null && reader["messageEmail"] != DBNull.Value)
                            message.messageEmail = (string)reader["messageEmail"];
                        else
                            message.messageEmail = "";

                        if (reader["messageBody"] != null && reader["messageBody"] != DBNull.Value)
                            message.messageBody = (string)reader["messageBody"];
                        else
                            message.messageBody = "";

                        if (reader["messageDate"] != null && reader["messageDate"] != DBNull.Value)
                            message.messageDate = (DateTime)reader["messageDate"];
                        else
                            message.messageDate = null;

                        messages.Add(message);
                    }
                }
            }
            return messages;
        }

        [HttpGet]
        public Message GetMessageById(int MessageId)
        {
            Message message = new Message();
            using (SqlConnection connection = new SqlConnection(ConnectionString))
            {
                using (SqlCommand cmd = new SqlCommand("sp_GetMessageByMessageId", connection))
                {
                    connection.Open();
                    cmd.CommandType = CommandType.StoredProcedure;

                    SqlParameter param = new SqlParameter();
                    param.ParameterName = "@messageId";
                    param.Value = MessageId;

                    cmd.Parameters.Add(param);

                    SqlDataReader reader = cmd.ExecuteReader();
                    while (reader.Read())
                    {
                        if (reader["messageName"] != null && reader["messageName"] != DBNull.Value)
                            message.messageName = (string)reader["messageName"];
                        else
                            message.messageName = "";

                        if (reader["messageEmail"] != null && reader["messageEmail"] != DBNull.Value)
                            message.messageEmail = (string)reader["messageEmail"];
                        else
                            message.messageEmail = "";

                        if (reader["messageBody"] != null && reader["messageBody"] != DBNull.Value)
                            message.messageBody = (string)reader["messageBody"];
                        else
                            message.messageBody = "";

                        if (reader["messageDate"] != null && reader["messageDate"] != DBNull.Value)
                            message.messageDate = (DateTime)reader["messageDate"];
                        else
                            message.messageDate = null;
                    }
                }
            }
            return message;
        }

        [HttpPost]
        public void InsertMessage(Message message)
        {
            using (SqlConnection connection = new SqlConnection(ConnectionString))
            {
                using (SqlCommand cmd = new SqlCommand("sp_InsertNewMessage", connection))
                {
                    connection.Open();
                    cmd.CommandType = CommandType.StoredProcedure;

                    SqlParameter messageName = new SqlParameter();
                    messageName.ParameterName = "@messageName";
                    messageName.Value = message.messageName;

                    SqlParameter messageEmail = new SqlParameter();
                    messageEmail.ParameterName = "@messageEmail";
                    messageEmail.Value = message.messageEmail;

                    SqlParameter messageBody = new SqlParameter();
                    messageBody.ParameterName = "@messageBody";
                    messageBody.Value = message.messageBody;

                    SqlParameter messageDate = new SqlParameter();
                    messageDate.ParameterName = "@messageDate";
                    messageDate.Value = message.messageDate;

                    cmd.Parameters.Add(messageName);
                    cmd.Parameters.Add(messageEmail);
                    cmd.Parameters.Add(messageBody);
                    cmd.Parameters.Add(messageDate);

                    SqlDataReader reader = cmd.ExecuteReader();
                }
            }
        }

        [HttpPost]
        public void DeleteMessage(int MessageId)
        {
            using (SqlConnection connection = new SqlConnection(ConnectionString))
            {
                using (SqlCommand cmd = new SqlCommand("sp_DeleteMessage", connection))
                {
                    connection.Open();
                    cmd.CommandType = CommandType.StoredProcedure;
                    SqlParameter param = new SqlParameter();
                    param.ParameterName = "@messageId";
                    param.Value = MessageId;
                    cmd.Parameters.Add(param);
                    SqlDataReader reader = cmd.ExecuteReader();
                }
            }
        }
    }
}
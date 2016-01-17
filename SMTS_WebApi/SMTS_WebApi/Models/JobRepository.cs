using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace SMTS_WebApi.Models
{
    public class JobRepository : IJobRepository
    {
        static string ConnectionString = ConfigurationManager.ConnectionStrings["DBConnectionString"].ConnectionString;
        static DataTable dtJob = new DataTable();

        [HttpGet]
        public List<Job> GetAllJob()
        {
            List<Job> Jobs = new List<Job>();
            using (SqlConnection connection = new SqlConnection(ConnectionString))
            {
                using (SqlCommand cmd = new SqlCommand("sp_GetJobList", connection))
                {
                    connection.Open();
                    cmd.CommandType = CommandType.StoredProcedure;
                    SqlDataReader reader = cmd.ExecuteReader();
                    while (reader.Read())
                    {
                        Job job = new Job();
                        job.JobId = (int)reader["JobId"];
                        if (reader["JobTitle"] != null && reader["JobTitle"] != DBNull.Value)
                            job.JobTitle = (string)reader["JobTitle"];

                        if (reader["JobCompanyName"] != null && reader["JobCompanyName"] != DBNull.Value)
                            job.JobCompanyName = (string)reader["JobCompanyName"];
                        else
                            job.JobCompanyName = "";

                        if (reader["JobRequiredYearExperience"] != null && reader["JobRequiredYearExperience"] != DBNull.Value)
                            job.JobRequiredYearExperience = (string)reader["JobRequiredYearExperience"];
                        else
                            job.JobRequiredYearExperience = "";

                        if (reader["JobLocation"] != null && reader["JobLocation"] != DBNull.Value)
                            job.JobLocation = (string)reader["JobLocation"];
                        else
                            job.JobLocation = "";

                        if (reader["JobDescription"] != null && reader["JobDescription"] != DBNull.Value)
                            job.JobDescription = (string)reader["JobDescription"];
                        else
                            job.JobDescription = "";

                        if (reader["JobLastDate"] != null && reader["JobLastDate"] != DBNull.Value)
                            job.JobLastDate = (DateTime)reader["JobLastDate"];
                        else
                            job.JobLastDate = null;

                        if (reader["JobKeySkills"] != null && reader["JobKeySkills"] != DBNull.Value)
                            job.JobKeySkills = (string)reader["JobKeySkills"];
                        else
                            job.JobKeySkills = "";

                        if (reader["JobSalary"] != null && reader["JobSalary"] != DBNull.Value)
                            job.JobSalary = (string)reader["JobSalary"];
                        else
                            job.JobSalary = "";

                        if (reader["JobIndustry"] != null && reader["JobIndustry"] != DBNull.Value)
                            job.JobIndustry = (string)reader["JobIndustry"];
                        else
                            job.JobIndustry = "";

                        if (reader["JobFunctionalArea"] != null && reader["JobFunctionalArea"] != DBNull.Value)
                            job.JobFunctionalArea = (string)reader["JobFunctionalArea"];
                        else
                            job.JobFunctionalArea = "";

                        if (reader["JobRole"] != null && reader["JobRole"] != DBNull.Value)
                            job.JobRole = (string)reader["JobRole"];
                        else
                            job.JobRole = "";

                        if (reader["JobQualification"] != null && reader["JobQualification"] != DBNull.Value)
                            job.JobQualification = (string)reader["JobQualification"];
                        else
                            job.JobQualification = "";

                        if (reader["JobCompanyProfile"] != null && reader["JobCompanyProfile"] != DBNull.Value)
                            job.JobCompanyProfile = (string)reader["JobCompanyProfile"];
                        else
                            job.JobCompanyProfile = "";

                        if (reader["JobPostedDate"] != null && reader["JobPostedDate"] != DBNull.Value)
                            job.JobPostedDate = (DateTime)reader["JobPostedDate"];
                        else
                            job.JobPostedDate = null;

                        if (reader["JobCompanyImage"] != null && reader["JobCompanyImage"] != DBNull.Value)
                            job.JobCompanyImage = (string)reader["JobCompanyImage"];
                        else
                            job.JobCompanyImage = "";

                        if (reader["UserId"] != null && reader["UserId"] != DBNull.Value)
                            job.UserId = (int)reader["UserId"];
                        else
                            job.UserId = null;

                        Jobs.Add(job);
                    }
                }
            }
            return Jobs;
        }

        //[HttpGet]
        //[ActionName("GetEmployeeByID")]
        //public Job Get(int id)
        //{

        //    SqlDataReader reader = null;
        //    SqlConnection myConnection = new SqlConnection();
        //    myConnection.ConnectionString = @"Server=.\SQLSERVER2008R2;Database=DBCompany;User ID=sa;Password=xyz@1234;";

        //    SqlCommand sqlCmd = new SqlCommand();
        //    sqlCmd.CommandType = CommandType.Text;
        //    sqlCmd.CommandText = "Select * from tblEmployee where EmployeeId=" + id + "";
        //    sqlCmd.Connection = myConnection;
        //    myConnection.Open();
        //    reader = sqlCmd.ExecuteReader();
        //    Job emp = null;
        //    while (reader.Read())
        //    {
        //        emp = new Job();
        //        //emp.EmployeeId = Convert.ToInt32(reader.GetValue(0));
        //        //emp.Name = reader.GetValue(1).ToString();
        //        //emp.ManagerId = Convert.ToInt32(reader.GetValue(2));
        //    }
        //    return emp;
        //    myConnection.Close();
        //}  




    }
}
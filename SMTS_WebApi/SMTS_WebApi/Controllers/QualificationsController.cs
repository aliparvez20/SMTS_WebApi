﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using SMTS_WebApi.Models;

namespace SMTS_WebApi.Controllers
{
    public class QualificationsController : ApiController
    {
        private SandhanContainer db = new SandhanContainer();

        // GET: api/Qualifications
        public IQueryable<Qualification> GetQualifications()
        {
            return db.Qualifications;
        }

        // GET: api/Qualifications/5
        [ResponseType(typeof(Qualification))]
        public IHttpActionResult GetQualification(int id)
        {
            Qualification qualification = db.Qualifications.Find(id);
            if (qualification == null)
            {
                return NotFound();
            }

            return Ok(qualification);
        }

        // PUT: api/Qualifications/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutQualification(int id, Qualification qualification)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != qualification.Id)
            {
                return BadRequest();
            }

            db.Entry(qualification).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!QualificationExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Qualifications
        [ResponseType(typeof(Qualification))]
        public IHttpActionResult PostQualification(Qualification qualification)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Qualifications.Add(qualification);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = qualification.Id }, qualification);
        }

        // DELETE: api/Qualifications/5
        [ResponseType(typeof(Qualification))]
        public IHttpActionResult DeleteQualification(int id)
        {
            Qualification qualification = db.Qualifications.Find(id);
            if (qualification == null)
            {
                return NotFound();
            }

            db.Qualifications.Remove(qualification);
            db.SaveChanges();

            return Ok(qualification);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool QualificationExists(int id)
        {
            return db.Qualifications.Count(e => e.Id == id) > 0;
        }
    }
}
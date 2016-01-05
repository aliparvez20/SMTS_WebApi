using SMTS_WebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace SMTS_WebApi.Controllers
{
    [EnableCorsAttribute("http://localhost:49531", "*", "*")]
    public class ProductsController : ApiController
    {
        // GET: api/Products
        public IEnumerable<Product> Get()
        {
            ProductRepository productRepository = new ProductRepository();
            return productRepository.Retrieve();
        }

        // GET: api/Products/5
        public IEnumerable<Product> Get(string search)
        {
            ProductRepository productRepository = new ProductRepository();
            var products = productRepository.Retrieve();
            return products.Where(p => p.ProductCode.Contains(search));
        }

        // POST: api/Products
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Products/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Products/5
        public void Delete(int id)
        {
        }
    }
}

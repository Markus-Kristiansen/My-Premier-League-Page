using System.IO;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FootballApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TeamImageUploadController : ControllerBase
    {
        private readonly IWebHostEnvironment _hosting;

        public TeamImageUploadController(IWebHostEnvironment hosting)
        {
            _hosting = hosting;
        }

        [HttpPost]
        [Route("[action]")]
        public ActionResult SaveImage(IFormFile file)
        {
            string webRootPath = _hosting.WebRootPath;
            string absolutePath = Path.Combine($"{webRootPath}/images/image/{file.FileName}");

            try
            {
                using (var fileStream = new FileStream(absolutePath, FileMode.Create))
                {
                    file.CopyTo(fileStream);
                }
                return StatusCode(201);
            }
            catch
            {
                return StatusCode(500);
            }
        }

    }
}
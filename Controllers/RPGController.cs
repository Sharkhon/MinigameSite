using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MinigameSite.Models;

namespace MinigameSite.Controllers
{
    public class RGPController : Controller
    {

#region Views
        
        public IActionResult Index() {
            return View();
        }

#endregion



    }
}
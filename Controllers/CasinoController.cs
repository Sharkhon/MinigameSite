using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MinigameSite.Models;

namespace MinigameSite.Controllers
{
    public class CasinoController : Controller
    {

#region Views

        public IActionResult Index() {
            return View();
        }

        public IActionResult Slots() {
            return View();
        }

        public IActionResult TableGames() {
            return View();
        }

        public IActionResult PersonalGames() {
            return View();
        }

#endregion
    }
}
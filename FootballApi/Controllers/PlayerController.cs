

using System.Collections.Generic;
using FootballApi.Models;
using FootballApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace FootballApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PlayerController : ControllerBase
    {
        private readonly PlayerService _playerService;

        public PlayerController(PlayerService playerService)
        {
            _playerService = playerService;
        }

        [HttpGet]
        public IEnumerable<Player> GetPlayers()
        {
            return _playerService.GetPlayers();
        }


        [HttpGet]
        [Route("/player/name")]
        public Player GetPlayer(string id)
        {
            return _playerService.GetPlayer(id);
        }

        [HttpGet]
        [Route("{name}")]
        public Player GetPlayerByName(string name)
        {
            return _playerService.GetPlayer(name);
        }


        [HttpPost]
        public Player CreatePlayer(Player newPlayer)
        {
            return _playerService.CreatePlayer(newPlayer);
        }

        [HttpDelete("{id}")]
        public IActionResult DeletePlayer(string id)
        {
            _playerService.DeletePlayer(id);
            return NoContent();
        }

        [HttpPut("{id}")]
        public IActionResult Update(string id, Player playerIn)
        {
            var player = _playerService.getPlayerById(id);

            if (player == null)
            {
                return NotFound();
            }

            _playerService.UpdatePlayer(playerIn);
            return NoContent();
        }
    }
}
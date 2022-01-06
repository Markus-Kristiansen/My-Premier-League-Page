using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using FootballApi.Interfaces;

namespace FootballApi.Models
{
    public class Player : IPlayer
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
        public string Nationality { get; set; }
        public string Team { get; set; }
        public string Image { get; set; }
        public string Biography { get; set; }
        public string TeamIcon { get; set; }
    }
}
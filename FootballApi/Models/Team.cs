using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using FootballApi.Interfaces;

namespace FootballApi.Models
{
    public class Team : ITeam
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Name { get; set; }
        public int Est { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public string Image { get; set; }
        public string Biography { get; set; }
    }
}

namespace FootballApi.Models
{
    public interface IFootballDatabaseSettings
    {
        string PlayerCollectionName { get; set; }
        string TeamCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }

    public class FootballDatabaseSettings : IFootballDatabaseSettings
    {
        public string PlayerCollectionName { get; set; }
        public string TeamCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }
}
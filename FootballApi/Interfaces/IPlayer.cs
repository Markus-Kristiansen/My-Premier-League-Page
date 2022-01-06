namespace FootballApi.Interfaces
{
    public interface IPlayer
    {
        string Id { get; set; }
        string Name { get; set; }
        int Age { get; set; }
        string Nationality { get; set; }
        string Team { get; set; }
        string Image { get; set; }
        string Biography { get; set; }
        string TeamIcon { get; set; }
    }
}
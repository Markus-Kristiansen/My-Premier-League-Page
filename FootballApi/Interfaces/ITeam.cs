namespace FootballApi.Interfaces
{
    public interface ITeam
    {
        string Id { get; set; }
        string Name { get; set; }
        int Est { get; set; }
        string Country { get; set; }
        string City { get; set; }
        string Image { get; set; }
        string Biography { get; set; }
    }
}
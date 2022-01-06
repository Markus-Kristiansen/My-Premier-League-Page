using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FootballApi.Models;
using FootballApi.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.OpenApi.Models;

namespace FootballApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "FootballApi", Version = "v1" });
            });

            services.Configure<FootballDatabaseSettings>(
                Configuration.GetSection(nameof(FootballDatabaseSettings))
            );

            services.AddSingleton<IFootballDatabaseSettings>(
                sp => sp.GetRequiredService<IOptions<FootballDatabaseSettings>>().Value
            );

            services.AddSingleton<PlayerService>();
            services.AddSingleton<TeamService>();

            services.AddCors(
                options =>
                {
                    options.AddPolicy("AllowAny",
                        builder => builder
                            .AllowAnyOrigin()
                            .AllowAnyHeader()
                            .AllowAnyMethod()
                    );
                }
            );

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "FootballApi v1"));
            }


            // Let us use static files
            //DefaultFilesOptions newOptions = new DefaultFilesOptions();
            //newOptions.DefaultFileNames.Append("index.html");

            //app.UseDefaultFiles();
            app.UseHttpsRedirection();

            app.UseStaticFiles();


            // Initialize use of CORS
            app.UseCors("AllowAny");

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}

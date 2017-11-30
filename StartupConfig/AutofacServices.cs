using System;
using AspNetCore2Angular5.Abstract;
using AspNetCore2Angular5.Abstract.Localization;
using AspNetCore2Angular5.Concrete;
using AspNetCore2Angular5.Concrete.Localization;

namespace Autofac.Extensions.DependencyInjection
{
    public static class AutofacServices
    {
        // This is the default if you don't have an environment specific method.
        public static ContainerBuilder ConfigureContainer(this ContainerBuilder builder)
        {
            // Add things to the Autofac ContainerBuilder.
            
            builder.RegisterType<NavigationRepository>().As<INavigationRepository>().OwnedByLifetimeScope();

            /// <summary>
            /// Add Repository Abstraction for Localization repositories.
            /// </summary>
            builder.RegisterType<LocalizationRepository>().As<ILocalizationRepository>().OwnedByLifetimeScope();
            /// <summary>
            /// Add Repository Abstraction for Json File and data management
            /// </summary>
            builder.RegisterType<JsonManagerRepository>().As<IJsonManagerRepository>().OwnedByLifetimeScope();

            /// <summary>
            /// Add Repository Abstraction for Store Type Management
            /// </summary>
            builder.RegisterType<StoreRepository>().As<IStoreRepository>().OwnedByLifetimeScope();
            
            return builder;

        }
    }
}

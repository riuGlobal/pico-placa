import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
// import { AuthService } from '../auth/auth.service';


//  Validate arguments

if (!(process.argv[2] && process.argv[3]  && process.argv[4])) {
    console.error("Missing parameters")
    console.error("Usage: npm run pico-placa <licence-plate> <date> <time>")
    process.exit(0)
}


async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.init();
    // const authService = app.get(AuthService);
    // const client = {
    //     name: process.argv[2],
    //     secret: process.argv[3],
    //     additionalInfo: {
    //         useExternalIds: false
    //     }
    // }
    // const clientRegistered = await authService.registerClient(client);
    // console.log(`Client ${clientRegistered.name} with id
    // ${clientRegistered.id} registered succesfully. `)
    console.log(`Yes, a car with licence plate : ${process.argv[2]} can be on the road on ${process.argv[3]} at ${process.argv[4]}`)
    console.log(`No, a car with licence plate : ${process.argv[2]} can not be on the road on ${process.argv[3]} at ${process.argv[4]}`)
    process.exit(0);
}
 
bootstrap();
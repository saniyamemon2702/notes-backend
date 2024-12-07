import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { Note, NoteSchema } from './schema/note.schema';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://saniya:notesDB@cluster0.nyo9z.mongodb.net/', { dbName: 'notesDB' }),
  MongooseModule.forFeature([{ name: Note.name, schema: NoteSchema }])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

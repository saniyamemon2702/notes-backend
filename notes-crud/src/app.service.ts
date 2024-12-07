import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Note } from './schema/note.schema';

@Injectable()
export class AppService {
  constructor(@InjectModel(Note.name) private noteModel: Model<Note>) { }

  async createNote(title: string, content: string): Promise<Note> {
    const newNote = new this.noteModel({ title, content });
    return newNote.save();
  }

  async getNotes(): Promise<Note[]> {
    return this.noteModel.find().exec();
  }

  async updateNote(id: string, title: string, content: string): Promise<Note> {
    return this.noteModel.findByIdAndUpdate(id, { title, content }, { new: true });
  }

  async deleteNote(id: string): Promise<Note> {
    return this.noteModel.findByIdAndDelete(id);
  }
}

import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/notes')
export class AppController {
  constructor(private readonly notesService: AppService) { }

  // add new note service
  @Post()
  createNote(@Body() body: { title: string, content: string }) {
    return this.notesService.createNote(body.title, body.content);
  }

  // get all notes service
  @Get()
  getNotes() {
    return this.notesService.getNotes();
  }
  // update note service: id required
  @Put(':id')
  updateNote(@Param('id') id: string, @Body() body: { title: string; content: string }) {
    return this.notesService.updateNote(id, body.title, body.content);
  }

  // delete note: id required
  @Delete(':id')
  deleteNote(@Param('id') id: string) {
    return this.notesService.deleteNote(id);
  }
}

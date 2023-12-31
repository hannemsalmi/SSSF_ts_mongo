// TODO: Schema for animal model
import {Schema, model} from 'mongoose';
import {Animal} from '../../interfaces/Animal';

const animalSchema = new Schema<Animal>({
  animal_name: {
    type: String,
    required: true,
    minlength: 2,
  },
  species: {
    type: Schema.Types.ObjectId,
    ref: 'Species',
    required: true,
  },
  birthdate: {
    type: Date,
    required: true,
    max: Date.now(),
  },
  gender: {
    type: String,
    enum: ['Male', 'Female'],
    required: true,
  },
});

export default model<Animal>('Animal', animalSchema);

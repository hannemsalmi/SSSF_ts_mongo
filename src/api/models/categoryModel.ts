// Schema for category model
import {Schema, model} from 'mongoose';
import {Category} from '../../interfaces/Category';

const categorySchema = new Schema<Category>({
  category_name: {
    type: String,
    required: true,
    unique: true,
    minlength: 2,
  },
});

export default model<Category>('Category', categorySchema);

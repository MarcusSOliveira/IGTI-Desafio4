import mongoose from 'mongoose';

const accountSchema = mongoose.Schema({
      name: {
        type: String,
        required: true,
      },
      subject: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        required: true,
      },
      value: {
        type: Number,
        required: true,
        balance(value) {
            if (value < 0) throw new Error('A nota não pode ser negativa.');
          },
      },

      lastModified: {
        type: Date,
        required: true,      
      },      
    });
  
    const accountModel = mongoose.model('Desafio', accountSchema, 'Grades');
  
    export { accountModel };

  
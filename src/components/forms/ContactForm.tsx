import {sendContactFormMessage} from '@/lib/actions/sendContactForm';
import {contactFormSchema, ContactFormSchema} from '@/lib/schema/contactFormSchema';
import {zodResolver} from '@hookform/resolvers/zod';
import {useState, useTransition} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {AiOutlineLoading} from 'react-icons/ai';
import ValidationMessage from './ValidationMessage';

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: {errors},
  } = useForm<ContactFormSchema>({
    mode: 'onTouched',
    resolver: zodResolver(contactFormSchema),
  });

  const [isPending, startTransition] = useTransition();
  const [successFormSubmission, setSuccessFormSubmission] = useState(false);

  const onSubmit: SubmitHandler<ContactFormSchema> = async (data) => {
    startTransition(async () => {
      try {
        await sendContactFormMessage(data);
        reset();
        setSuccessFormSubmission(true);
      } catch {
        setError('root.serverError', {
          type: 'server',
          message: 'Form submission failed. Please try again later.',
        });
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <input
        {...register('name')}
        placeholder="Name"
        type="text"
        aria-invalid={errors.name ? 'true' : 'false'}
      />
      {errors.name?.message && <ValidationMessage type="error" message={errors.name?.message} />}

      <input
        type="text"
        {...register('email')}
        placeholder="E-mail"
        aria-invalid={errors.email ? 'true' : 'false'}
      />
      {errors.email?.message && <ValidationMessage type="error" message={errors.email?.message} />}

      <textarea
        {...register('message')}
        placeholder="Message"
        aria-invalid={errors.message ? 'true' : 'false'}
      ></textarea>
      {errors.message?.message && (
        <ValidationMessage type="error" message={errors.message?.message} />
      )}
      <button
        type="submit"
        disabled={isPending}
        aria-label="Send message"
        className="font-futura text-primary hover:border-primary inline-flex w-fit flex-nowrap items-center gap-3.5 border-2 border-white bg-white px-5 py-2.5 text-center text-2xl whitespace-nowrap hover:cursor-pointer hover:bg-transparent hover:text-white"
      >
        {isPending ? (
          <>
            {'Send message'} <AiOutlineLoading className="animate-spin" />
          </>
        ) : (
          'Send message'
        )}
      </button>

      <div className="mt-6">
        {errors.root?.serverError.message && (
          <ValidationMessage message={errors.root?.serverError.message} type="error" />
        )}
        {successFormSubmission && (
          <ValidationMessage
            message="Thank you for your message, we will be in touch in no time!"
            type="success"
          />
        )}
      </div>
    </form>
  );
}

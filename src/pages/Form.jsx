import React from "react";
import { Controller, useForm } from "react-hook-form";
import { addEnterprise } from "../service/FormService";
import Input from "../components/Input.jsx";

export default function Form() {
  const ref = React.useRef();

  const { register, formState, handleSubmit, control } = useForm({
    mode: "onTouched",
  });

  const { errors } = formState;

  const onSubmit = async (data) => {
    await addEnterprise(data);
  };

  return (
    <form className="form-app" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="h3 mb-3 fw-normal">Form</h1>
      <Input
        label="Nom de l'entreprise"
        id="enterpriseName"
        placeholder="Nom de l'entreprise"
        ref={ref}
        {...register("enterpriseName", {
          required: {
            value: true,
            message: "Le nom de l'entreprise est obligatoire !",
          },
          maxLength: {
            value: 100,
            message:
              "Le nom de l'entreprise ne doit pas dépasser 100 caractères",
          },
          pattern: {
            value: /^[a-zA-Z0-9 ]*$/gm,
            message:
              "Le nom de l'entreprise ne doit contenir que des caractères alphanumériques",
          },
        })}
      />
      {errors.enterpriseName?.type && (
        <p className="text-danger">*{errors.enterpriseName.message}</p>
      )}

      <Input
        label="SIRET de l'entreprise"
        id="enterpriseSiret"
        placeholder="SIRET de l'entreprise"
        ref={ref}
        {...register("enterpriseSiret", {
          required: {
            value: true,
            message: "Le SIRET de l'entreprise est obligatoire !",
          },
          minLength: {
            value: 14,
            message:
              "Le SIRET de l'entreprise doit être composé de 14 chiffres !",
          },
          maxLength: {
            value: 14,
            message:
              "Le SIRET de l'entreprise doit être composé de 14 chiffres !",
          },
          pattern: {
            value: /^[0-9]*$/gm,
            message:
              "Le SIRET de l'entreprise ne doit contenir que des chiffres !",
          },
        })}
      />
      {errors.enterpriseSiret?.type && (
        <p className="text-danger">*{errors.enterpriseSiret.message}</p>
      )}

      <div className="row mb-4">
        <div className="col-8">
          <p>Avez-vous la certification ISO27001 ?</p>
        </div>
        <div className="col-4">
          <div className="form-check form-check-inline">
            <Controller
              render={({ field }) => (
                <input
                  className="form-check-input"
                  type="radio"
                  {...field}
                  value="true"
                  id="certifiedIso27001Yes"
                />
              )}
              control={control}
              name="certifiedIso27001"
              rules={{ required: "Veuillez sélectionner une option !" }}
            />
            <label className="form-check-label" htmlFor="certifiedIso27001Yes">
              Oui
            </label>
          </div>
          <div className="form-check form-check-inline">
            <Controller
              render={({ field }) => (
                <input
                  className="form-check-input"
                  type="radio"
                  {...field}
                  value="false"
                  id="certifiedIso27001No"
                />
              )}
              control={control}
              name="certifiedIso27001"
            />
            <label className="form-check-label" htmlFor="certifiedIso27001No">
              Non
            </label>
          </div>
        </div>
      </div>
      {errors.certifiedIso27001?.type && (
        <p className="text-danger">*{errors.certifiedIso27001.message}</p>
      )}

      <div className="row mb-4">
        <div className="col-8">
          <p>Avez-vous la certification ISO9001 ?</p>
        </div>
        <div className="col-4">
          <div className="form-check form-check-inline">
            <Controller
              render={({ field }) => (
                <input
                  className="form-check-input"
                  type="radio"
                  {...field}
                  value="true"
                  id="certifiedIso9001Yes"
                />
              )}
              control={control}
              name="certifiedIso9001"
              rules={{ required: "Veuillez sélectionner une option !" }}
            />
            <label className="form-check-label" htmlFor="certifiedIso9001Yes">
              Oui
            </label>
          </div>
          <div className="form-check form-check-inline">
            <Controller
              render={({ field }) => (
                <input
                  className="form-check-input"
                  type="radio"
                  {...field}
                  value="false"
                  id="certifiedIso9001No"
                />
              )}
              control={control}
              name="certifiedIso9001"
            />
            <label className="form-check-label" htmlFor="certifiedIso9001No">
              Non
            </label>
          </div>
        </div>
      </div>
      {errors.certifiedIso9001?.type && (
        <p className="text-danger">*{errors.certifiedIso9001.message}</p>
      )}

      <div className="row mb-4">
        <div className="col-8">
          <p>Avez-vous la certification ISO45001 ?</p>
        </div>
        <div className="col-4">
          <div className="form-check form-check-inline">
            <Controller
              render={({ field }) => (
                <input
                  className="form-check-input"
                  type="radio"
                  {...field}
                  value="true"
                  id="certifiedIso45001Yes"
                />
              )}
              control={control}
              name="certifiedIso45001"
              rules={{ required: "Veuillez sélectionner une option !" }}
            />
            <label className="form-check-label" htmlFor="certifiedIso45001Yes">
              Oui
            </label>
          </div>
          <div className="form-check form-check-inline">
            <Controller
              render={({ field }) => (
                <input
                  className="form-check-input"
                  type="radio"
                  {...field}
                  value="false"
                  id="certifiedIso45001No"
                />
              )}
              control={control}
              name="certifiedIso45001"
            />
            <label className="form-check-label" htmlFor="certifiedIso45001No">
              Non
            </label>
          </div>
        </div>
      </div>
      {errors.certifiedIso45001?.type && (
        <p className="text-danger">*{errors.certifiedIso45001.message}</p>
      )}

      <button
        className="w-100 btn btn-lg btn-primary custom-button mt-3"
        type="submit"
      >
        Envoyer
      </button>
    </form>
  );
}

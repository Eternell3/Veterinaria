CREATE TABLE "desparacitacion"(
    "idDesparacitacion" SERIAL NOT NULL,
    "fechaDesparacitacion" DATE NOT NULL,
    "descripcionDesparacitacion" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "desparacitacion" ADD PRIMARY KEY("idDesparacitacion");
CREATE TABLE "comunas"(
    "comuna_id" SERIAL NOT NULL,
    "comuna_nombre" VARCHAR(255) NOT NULL,
    "provincia_id" INTEGER NOT NULL
);
ALTER TABLE
    "comunas" ADD PRIMARY KEY("comuna_id");
CREATE TABLE "provincias"(
    "provincia_id" SERIAL NOT NULL,
    "provincia_nombre" VARCHAR(255) NOT NULL,
    "region_id" INTEGER NOT NULL
);
ALTER TABLE
    "provincias" ADD PRIMARY KEY("provincia_id");
CREATE TABLE "regiones"(
    "region_id" SERIAL NOT NULL,
    "region_nombre" VARCHAR(255) NOT NULL,
    "region_ordinal" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "regiones" ADD PRIMARY KEY("region_id");
CREATE TABLE "estadoReproductivo"(
    "idEstadoReproductivo" SERIAL NOT NULL,
    "descripcionEstadoReproductivo" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "estadoReproductivo" ADD PRIMARY KEY("idEstadoReproductivo");
CREATE TABLE "sexo"(
    "idSexo" SERIAL NOT NULL,
    "descripcionSexo" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "sexo" ADD PRIMARY KEY("idSexo");
CREATE TABLE "mascota"(
    "idMascota" SERIAL NOT NULL,
    "nombreMascota" VARCHAR(255) NOT NULL,
    "fechaNacimiento" DATE NOT NULL,
    "especie" VARCHAR(255) NOT NULL,
    "raza" VARCHAR(255) NOT NULL,
    "tamaño" VARCHAR(255) NOT NULL,
    "color" VARCHAR(255) NOT NULL,
    "idSexo" INTEGER NOT NULL,
    "idEstadoReproductivo" INTEGER NOT NULL,
    "idPropietario" INTEGER NOT NULL,
    "idVacunas" INTEGER NOT NULL,
    "idDesparacitacion" INTEGER NOT NULL,
    "idConsulta" INTEGER NOT NULL
);
ALTER TABLE
    "mascota" ADD PRIMARY KEY("idMascota");
CREATE TABLE "consulta"(
    "idConsulta" SERIAL NOT NULL,
    "descripcionConsulta" VARCHAR(255) NOT NULL,
    "fechaConsulta" DATE NOT NULL
);
ALTER TABLE
    "consulta" ADD PRIMARY KEY("idConsulta");
CREATE TABLE "propietario"(
    "idPropietario" SERIAL NOT NULL,
    "rut" VARCHAR(255) NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,
    "apellido" VARCHAR(255) NOT NULL,
    "fechaNacimiento" DATE NOT NULL,
    "direccion" VARCHAR(255) NOT NULL,
    "telefono" VARCHAR(255) NOT NULL,
    "idProvincia" INTEGER NOT NULL,
    "idRegion" INTEGER NOT NULL,
    "idComuna" INTEGER NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "propietario" ADD PRIMARY KEY("idPropietario");
CREATE TABLE "vacunas"(
    "idVacunas" SERIAL NOT NULL,
    "fechaVacuna" DATE NOT NULL,
    "descripcionVacuna" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "vacunas" ADD PRIMARY KEY("idVacunas");
ALTER TABLE
    "propietario" ADD CONSTRAINT "propietario_idcomuna_foreign" FOREIGN KEY("idComuna") REFERENCES "comunas"("comuna_id");
ALTER TABLE
    "mascota" ADD CONSTRAINT "mascota_idconsulta_foreign" FOREIGN KEY("idConsulta") REFERENCES "consulta"("idConsulta");
ALTER TABLE
    "mascota" ADD CONSTRAINT "mascota_iddesparacitacion_foreign" FOREIGN KEY("idDesparacitacion") REFERENCES "desparacitacion"("idDesparacitacion");
ALTER TABLE
    "mascota" ADD CONSTRAINT "mascota_idestadoreproductivo_foreign" FOREIGN KEY("idEstadoReproductivo") REFERENCES "estadoReproductivo"("idEstadoReproductivo");
ALTER TABLE
    "mascota" ADD CONSTRAINT "mascota_idvacunas_foreign" FOREIGN KEY("idVacunas") REFERENCES "vacunas"("idVacunas");
ALTER TABLE
    "mascota" ADD CONSTRAINT "mascota_idsexo_foreign" FOREIGN KEY("idSexo") REFERENCES "sexo"("idSexo");
ALTER TABLE
    "comunas" ADD CONSTRAINT "comunas_provincia_id_foreign" FOREIGN KEY("provincia_id") REFERENCES "provincias"("provincia_id");
ALTER TABLE
    "mascota" ADD CONSTRAINT "mascota_idpropietario_foreign" FOREIGN KEY("idPropietario") REFERENCES "propietario"("idPropietario");
ALTER TABLE
    "provincias" ADD CONSTRAINT "provincias_region_id_foreign" FOREIGN KEY("region_id") REFERENCES "regiones"("region_id");
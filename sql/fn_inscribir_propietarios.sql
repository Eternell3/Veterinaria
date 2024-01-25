
CREATE OR REPLACE FUNCTION FN_INSCRIBIR_PROPIETARIO(IN V_ID_PROPIETARIO INTEGER,
										IN V_RUT_PROPIETARIO VARCHAR,
										IN V_NOMBRE_PROPIETARIO VARCHAR,
										IN V_APELLIDO_PROPIETARIO VARCHAR,
										IN V_FECHA_NACIMIENTO_PROPIETARIO DATE,
										IN V_DIRECCION_PROPIETARIO VARCHAR,
										IN V_TELEFONO_PROPIETARIO VARCHAR,
										IN V_REGION INTEGER,
										IN V_PROVINCIA INTEGER,
										IN V_COMUNA INTEGER,
										IN V_PASS VARCHAR,
										IN V_EMAIL VARCHAR)  
RETURNS VARCHAR AS 

$body$
DECLARE

V_EXISTENCIA  INTEGER;

BEGIN 

SELECT COUNT(*)
INTO V_EXISTENCIA 
FROM propietario
WHERE "rut" = V_RUT_PROPIETARIO;

IF V_EXISTENCIA = 0 THEN 


     INSERT INTO propietario ("rut","nombre","apellido","fechaNacimiento","direccion","telefono","idRegion","idProvincia","idComuna","password","email")
	 VALUES(V_RUT_PROPIETARIO
		   ,V_NOMBRE_PROPIETARIO
		   ,V_APELLIDO_PROPIETARIO
		   ,V_FECHA_NACIMIENTO_PROPIETARIO
		   ,V_DIRECCION_PROPIETARIO
		   ,V_TELEFONO_PROPIETARIO
		   ,V_REGION
		   ,V_PROVINCIA
		   ,V_COMUNA
		   ,V_PASS
		   ,V_EMAIL);
		   
		   RETURN 'Inscripción realizada correctamente';


ELSE

RETURN 'Ya se encuentra inscrito en nuestro sistema';

END IF;

END 
$body$
LANGUAGE plpgsql;	

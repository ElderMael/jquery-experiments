import org.vertx.java.core.Handler;
import org.vertx.java.core.http.HttpServer;
import org.vertx.java.core.http.HttpServerRequest;
import org.vertx.java.core.json.impl.Json;
import org.vertx.java.deploy.Verticle;

public class RandomDataServer extends Verticle {

    public void start() {
        HttpServer server = vertx.createHttpServer();

        server.requestHandler(new Handler<HttpServerRequest>() {
            @Override
            public void handle(HttpServerRequest request) {

                if (request.path.equals("/")) {

                    request.response.putHeader("Content-type", "application/json")
                            .putHeader("Access-Control-Allow-Origin", "*");

                    request.response.setChunked(true);

                    Double[] mediciones = new Double[10];

                    for (int i = 0; i < 10; i++) {
                        mediciones[i] = (Math.random() * 31) + 143.0;
                    }

                    String json = Json.encode(new Mediciones(13, "prensa-b", mediciones));

                    request.response.write(json);

                }

            }
        });

        server.listen(8080, "localhost");
    }

    class Mediciones {

        private Integer id;

        private String canal;

        private Double[] mediciones;

        public Mediciones(Integer id, String canal, Double[] mediciones) {
            this.id = id;
            this.canal = canal;
            this.mediciones = mediciones;
        }

        public Double[] getMediciones() {
            return mediciones;
        }

        public void setMediciones(Double[] mediciones) {
            this.mediciones = mediciones;
        }

        public String getCanal() {
            return canal;
        }

        public void setCanal(String canal) {
            this.canal = canal;
        }

        public Integer getId() {
            return id;
        }

        public void setId(Integer id) {
            this.id = id;
        }


    }

}


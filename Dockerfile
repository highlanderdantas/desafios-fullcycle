FROM golang:alpine AS builder
COPY hello.go /hello/hello.go
WORKDIR /hello
RUN go build -o hello hello.go


FROM scratch
COPY --from=builder /hello/hello /hello
ENTRYPOINT ["/hello"]
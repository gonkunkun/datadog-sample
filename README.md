# Hello! Datadog Setting Samples

## Prerequisite

The initial Datadog configuration has been completed and the API KEY has been issued.
https://www.datadoghq.com/

## Configuration

1. create secret key

create dd-api-key-secret.yaml.
Set the datadog API key.

```
kubectl create secret generic dd-api-key --from-literal=DD_API_KEY=PLSEASE_FIX_MY_DD_API_KEY --dry-run=client -o yaml > dd-api-key-secret.yaml
kubectl apply -f dd-api-key-secret.yaml
```

2. apply Kubernetes manifest

```
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
kubectl apply -f dd-api-key-secret.yaml
```

## How To Use

1. Check the EndPoint

```
~/D/w/j/i/D/exercise1 ❯❯❯ kubectl get svc api-service -w                                                               ✘ 1
NAME          TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)    AGE
api-service   ClusterIP   [EndPoint]   <none>        8080/TCP   2d17h
```

2. Check API

```
kubectl run busybox --image=busybox --restart=Never --rm -it sh
wget [EndPoint]:8080/success
wget [EndPoint]:8080/error
```

3. Check the Datadog
- https://app.datadoghq.com/apm/
package com.example.weather;
import java.util.*;

public class CacheService{
 private static class Entry{Object v;long exp;}
 private final Map<String,Entry>store=new HashMap<>();
 public synchronized void put(String k,Object v,long ttlMs){
  Entry e=new Entry();e.v=v;e.exp=System.currentTimeMillis()+ttlMs;store.put(k,e);
 }
 public synchronized Object get(String k){
  Entry e=store.get(k);
  if(e==null||e.exp<System.currentTimeMillis())return null;
  return e.v;
 }
}